(function () {
  const data = window.COURSE_DATA;
  const topicContent = window.TOPIC_CONTENT;

  const $ = (selector) => document.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const normalize = (value) => String(value || "").toLowerCase();
  const unique = (items) => Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));

  function initCourseFacts() {
    $('[data-course="code"]').textContent = data.course.code;
    $('[data-course="level"]').textContent = data.course.level;
    $('[data-course="credits"]').textContent = data.course.creditUnits;
    $('[data-course="medium"]').textContent = data.course.medium;
  }

  function renderArchitecture() {
    const container = $("#architecture");
    [data.architecture.premise, data.architecture.method, data.architecture.throughLine].forEach((text) => {
      container.appendChild(el("p", "", text));
    });
  }

  function renderProfessorProfile() {
    const professor = topicContent.professor;
    const container = $("#professorProfile");
    const lead = el("p", "professor-lead", professor.framing);
    container.appendChild(lead);

    const roles = el("div", "professor-grid");
    const roleBox = el("div", "professor-box");
    roleBox.appendChild(el("h3", "", "Roles"));
    renderInlineList(roleBox, professor.roles);
    roles.appendChild(roleBox);

    const interestBox = el("div", "professor-box");
    interestBox.appendChild(el("h3", "", "Research interests"));
    renderInlineList(interestBox, professor.researchInterests);
    roles.appendChild(interestBox);

    container.appendChild(roles);

    const link = document.createElement("a");
    link.href = professor.profileUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.className = "text-command";
    link.textContent = "CityU profile";
    container.appendChild(link);
  }

  function renderInlineList(container, items) {
    const row = el("div", "tag-row");
    items.forEach((item) => row.appendChild(el("span", "tag", item)));
    container.appendChild(row);
  }

  function populateFilters() {
    addOptions("#issueFilter", unique(data.weeks.flatMap((week) => week.issues)));
    addOptions(
      "#theoryFilter",
      unique(data.weeks.flatMap((week) => week.theory.il.concat(week.theory.ir)))
    );
    addOptions("#institutionFilter", unique(data.weeks.flatMap((week) => week.institutions)));
  }

  function addOptions(selector, values) {
    const select = $(selector);
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function readingItem(reading) {
    const li = document.createElement("li");
    if (reading.url) {
      const link = document.createElement("a");
      link.href = reading.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = reading.label;
      li.appendChild(link);
    } else {
      li.textContent = reading.label;
    }
    const meta = document.createElement("span");
    meta.textContent = ` (${reading.accessMode}; ${reading.source})`;
    li.appendChild(meta);
    return li;
  }

  function listBlock(title, items, mapper) {
    const block = el("div", "detail-block");
    block.appendChild(el("h4", "", title));
    const ul = document.createElement("ul");
    items.forEach((item) => ul.appendChild(mapper ? mapper(item) : el("li", "", item)));
    block.appendChild(ul);
    return block;
  }

  function renderWeekCard(week) {
    const card = el("article", "week-card");
    card.dataset.week = week.id;

    const topline = el("div", "week-topline");
    topline.appendChild(el("span", "week-number", `Week ${week.week}`));
    const tags = el("div", "tag-row");
    week.issues.slice(0, 3).forEach((issue) => tags.appendChild(el("span", "tag issue", issue)));
    topline.appendChild(tags);

    card.appendChild(topline);
    card.appendChild(el("h3", "", week.title));
    card.appendChild(el("p", "problem", week.problem));
    card.appendChild(el("p", "thesis", week.thesis));

    const topic = topicContent.topics[week.id];
    if (topic) {
      const link = document.createElement("a");
      link.className = "topic-link";
      link.href = `./topics/${topic.slug}.html`;
      link.textContent = "Open topic page";
      card.appendChild(link);
    }

    const tagRow = el("div", "tag-row");
    week.institutions.forEach((institution) => tagRow.appendChild(el("span", "tag institution", institution)));
    card.appendChild(tagRow);

    const details = el("details", "week-details");
    const summary = el("summary", "", "Topic detail, readings, and activity");
    details.appendChild(summary);
    const grid = el("div", "detail-grid");
    grid.appendChild(listBlock("International law frame", week.theory.il));
    grid.appendChild(listBlock("IR/IPE/geopolitics frame", week.theory.ir));
    grid.appendChild(listBlock("Legal materials", week.legalFrame));
    grid.appendChild(listBlock("Required readings", week.readings.required, readingItem));
    grid.appendChild(listBlock("Discussion questions", week.discussionQuestions));
    grid.appendChild(listBlock("Class activity", [week.activity, `Output: ${week.output}`]));
    details.appendChild(grid);
    card.appendChild(details);

    return card;
  }

  function filterWeeks() {
    const query = normalize($("#searchInput").value);
    const issue = $("#issueFilter").value;
    const theory = $("#theoryFilter").value;
    const institution = $("#institutionFilter").value;

    return data.weeks.filter((week) => {
      const searchable = normalize(JSON.stringify(week));
      const theoryValues = week.theory.il.concat(week.theory.ir);
      return (
        (!query || searchable.includes(query)) &&
        (!issue || week.issues.includes(issue)) &&
        (!theory || theoryValues.includes(theory)) &&
        (!institution || week.institutions.includes(institution))
      );
    });
  }

  function renderWeeks() {
    const weeks = filterWeeks();
    const grid = $("#weeksGrid");
    grid.replaceChildren();
    weeks.forEach((week) => grid.appendChild(renderWeekCard(week)));
    $("#weekCount").textContent = `${weeks.length} of ${data.weeks.length} modules shown`;
  }

  function renderTheoryMap() {
    const map = $("#theoryMap");
    const theoryWeeks = new Map();
    data.weeks.forEach((week) => {
      week.theory.il.concat(week.theory.ir).forEach((theory) => {
        if (!theoryWeeks.has(theory)) theoryWeeks.set(theory, []);
        theoryWeeks.get(theory).push(`Week ${week.week}`);
      });
    });
    Array.from(theoryWeeks.entries())
      .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
      .slice(0, 12)
      .forEach(([theory, weeks]) => {
        const item = el("div", "map-item");
        item.appendChild(el("strong", "", theory));
        item.appendChild(el("span", "", weeks.join(", ")));
        map.appendChild(item);
      });
  }

  function renderIssueMap() {
    const map = $("#issueMap");
    data.tags.issues.forEach((issue) => {
      const weeks = data.weeks.filter((week) => week.issues.includes(issue));
      const item = el("div", "issue-item");
      item.appendChild(el("strong", "", issue));
      item.appendChild(el("span", "", weeks.map((week) => `Week ${week.week}`).join(", ") || "Reference theme"));
      map.appendChild(item);
    });
  }

  function renderAssessment() {
    $("#assessmentSummary").textContent =
      "The official assessment balance is preserved while the continuous assessment is redirected toward practical legal-geoeconomic judgment.";

    const panel = $("#assessmentPanel");
    const main = el("div", "assessment-card");
    main.appendChild(el("h3", "", data.assessment.strategyMemo.title));
    main.appendChild(el("p", "", `${data.assessment.strategyMemo.weight}%: ${data.assessment.strategyMemo.description}`));
    const moves = document.createElement("ul");
    data.assessment.strategyMemo.requiredMoves.forEach((move) => moves.appendChild(el("li", "", move)));
    main.appendChild(moves);
    panel.appendChild(main);

    const exam = el("div", "assessment-card");
    exam.appendChild(el("h3", "", "Examination and participation"));
    exam.appendChild(el("p", "", `Exam ${data.assessment.examination}%: ${data.assessment.exam}`));
    exam.appendChild(el("p", "", `Participation ${data.assessment.participation.weight}%: ${data.assessment.participation.description}`));
    panel.appendChild(exam);
  }

  function renderSources() {
    const list = $("#sourceList");
    data.sourceIndex.forEach((source) => {
      const item = el("div", "source-item");
      const linkBox = el("div", "");
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = source.label;
      linkBox.appendChild(link);
      item.appendChild(linkBox);
      item.appendChild(el("p", "", source.authority));
      item.appendChild(el("p", "", source.usedIn.join(", ")));
      list.appendChild(item);
    });
  }

  function attachEvents() {
    ["#searchInput", "#issueFilter", "#theoryFilter", "#institutionFilter"].forEach((selector) => {
      $(selector).addEventListener("input", renderWeeks);
      $(selector).addEventListener("change", renderWeeks);
    });
  }

  initCourseFacts();
  renderArchitecture();
  renderProfessorProfile();
  populateFilters();
  renderWeeks();
  renderTheoryMap();
  renderIssueMap();
  renderAssessment();
  renderSources();
  attachEvents();
})();
