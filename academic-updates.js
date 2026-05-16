(function () {
  const course = window.COURSE_DATA;
  const academic = window.ACADEMIC_UPDATES_DATA;

  const $ = (selector) => document.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const normalize = (value) => String(value || "").toLowerCase();
  const unique = (items) => Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
  const sourceName = (item) => (item.type === "Journal Article" ? item.venue : item.publisher);

  function option(value, label) {
    const node = document.createElement("option");
    node.value = value;
    node.textContent = label || value;
    return node;
  }

  function weekById(weekId) {
    return course.weeks.find((week) => week.id === weekId);
  }

  function populateFilters() {
    const topicFilter = $("#academicTopicFilter");
    course.weeks.forEach((week) => {
      topicFilter.appendChild(option(week.id, `Week ${week.week}: ${week.shortTitle}`));
    });

    const typeFilter = $("#academicTypeFilter");
    unique(academic.updates.map((item) => item.type)).forEach((type) => {
      typeFilter.appendChild(option(type));
    });

    const publisherFilter = $("#academicPublisherFilter");
    unique(academic.updates.map((item) => sourceName(item))).forEach((source) => {
      publisherFilter.appendChild(option(source));
    });
  }

  function filteredUpdates() {
    const query = normalize($("#academicSearch").value);
    const topic = $("#academicTopicFilter").value;
    const type = $("#academicTypeFilter").value;
    const source = $("#academicPublisherFilter").value;

    return academic.updates.filter((item) => {
      const week = weekById(item.weekId);
      const searchable = normalize(
        [item.title, item.authors, item.venue, item.publisher, item.note, week?.title, week?.issues?.join(" ")].join(" ")
      );
      return (
        (!query || searchable.includes(query)) &&
        (!topic || item.weekId === topic) &&
        (!type || item.type === type) &&
        (!source || sourceName(item) === source)
      );
    });
  }

  function renderStats(items) {
    $("#academicResultCount").textContent = `${items.length} of ${academic.updates.length} records shown`;
    $("#academicLastChecked").textContent = `Last source check: ${academic.metadata.lastChecked}`;
    $("#academicScope").textContent = academic.metadata.scope;
  }

  function renderTopicSummary() {
    const list = $("#academicTopicSummary");
    course.weeks.forEach((week) => {
      const items = academic.updates.filter((item) => item.weekId === week.id);
      const link = document.createElement("a");
      link.href = `#${week.id}`;
      link.className = "topic-summary-link";
      link.appendChild(el("span", "", `Week ${week.week}`));
      link.appendChild(el("strong", "", week.shortTitle));
      link.appendChild(el("small", "", `${items.length} records`));
      list.appendChild(link);
    });
  }

  function renderRecord(item) {
    const card = el("article", "academic-record");
    card.dataset.type = item.type;
    card.dataset.publisher = item.publisher;

    const meta = el("div", "academic-record-meta");
    meta.appendChild(el("span", "tag issue", item.type));
    meta.appendChild(el("span", "tag institution", String(item.year)));
    meta.appendChild(el("span", "tag", sourceName(item)));
    card.appendChild(meta);

    const title = document.createElement("a");
    title.className = "academic-title";
    title.href = item.url;
    title.target = "_blank";
    title.rel = "noreferrer";
    title.textContent = item.title;
    card.appendChild(title);

    card.appendChild(el("p", "academic-authors", item.authors));
    card.appendChild(el("p", "academic-venue", item.venue));
    card.appendChild(el("p", "academic-note", item.note));

    return card;
  }

  function renderUpdates() {
    const items = filteredUpdates();
    renderStats(items);

    const root = $("#academicResults");
    root.replaceChildren();

    course.weeks.forEach((week) => {
      const topicItems = items.filter((item) => item.weekId === week.id);
      if (!topicItems.length) return;

      const section = el("section", "academic-topic-group");
      section.id = week.id;
      const heading = el("div", "academic-topic-heading");
      heading.appendChild(el("span", "week-number", `Week ${week.week}`));
      heading.appendChild(el("h2", "", week.title));
      heading.appendChild(el("p", "", week.problem));
      section.appendChild(heading);

      const grid = el("div", "academic-grid");
      topicItems
        .slice()
        .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
        .forEach((item) => grid.appendChild(renderRecord(item)));
      section.appendChild(grid);

      root.appendChild(section);
    });
  }

  function attachEvents() {
    ["#academicSearch", "#academicTopicFilter", "#academicTypeFilter", "#academicPublisherFilter"].forEach((selector) => {
      $(selector).addEventListener("input", renderUpdates);
      $(selector).addEventListener("change", renderUpdates);
    });
  }

  $("#academicCopyright").textContent = academic.metadata.copyrightNote;
  populateFilters();
  renderTopicSummary();
  renderUpdates();
  attachEvents();
})();
