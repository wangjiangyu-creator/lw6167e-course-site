(function () {
  const course = window.COURSE_DATA;
  const content = window.TOPIC_CONTENT;
  const topicId = document.body.dataset.topicId;
  const week = course.weeks.find((item) => item.id === topicId);
  const topic = content.topics[topicId];

  const $ = (selector) => document.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function linkOrText(item) {
    const li = document.createElement("li");
    if (item.url) {
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = item.label;
      li.appendChild(link);
    } else {
      li.textContent = item.label;
    }
    if (item.note) {
      li.appendChild(el("span", "reading-note", ` - ${item.note}`));
    }
    return li;
  }

  function renderList(container, items) {
    const ul = document.createElement("ul");
    items.forEach((item) => ul.appendChild(typeof item === "string" ? el("li", "", item) : linkOrText(item)));
    container.appendChild(ul);
  }

  function renderReadingSection(categoryKey) {
    const section = el("section", "reading-category");
    section.appendChild(el("h3", "", content.categories[categoryKey]));
    renderList(section, topic.recommendedReadings[categoryKey]);
    return section;
  }

  function renderTopic() {
    if (!week || !topic) {
      $("#topicRoot").appendChild(el("p", "missing-topic", "Topic content was not found."));
      return;
    }

    document.title = `${week.title} | ${course.course.code}`;
    $("#topicEyebrow").textContent = `Week ${week.week}`;
    $("#topicTitle").textContent = week.title;
    $("#topicProblem").textContent = week.problem;
    $("#topicSummary").textContent = topic.summary;
    $("#topicThesis").textContent = week.thesis;
    $("#conceptBox").textContent = topic.extra.conceptBox;

    const meta = $("#topicMeta");
    [
      ["Institutions", week.institutions.join(", ")],
      ["Issues", week.issues.join(", ")],
      ["Regions", week.regions.join(", ")],
    ].forEach(([label, value]) => {
      const row = el("div", "meta-row");
      row.appendChild(el("span", "", label));
      row.appendChild(el("strong", "", value));
      meta.appendChild(row);
    });

    renderList($("#lawFrame"), week.theory.il.concat(week.legalFrame));
    renderList($("#irFrame"), week.theory.ir);
    renderList($("#questions"), topic.engagementQuestions);
    renderList($("#seminarPrompts"), topic.seminarPrompts);

    const readings = $("#readings");
    [
      "primaryMaterials",
      "institutionalReports",
      "books",
      "journalArticles",
      "classicWorks",
      "mediaReports",
      "videos",
    ]
      .filter((key) => topic.recommendedReadings[key])
      .forEach((key) => {
        readings.appendChild(renderReadingSection(key));
      });

    $("#professorContext").textContent = content.professor.framing;
    const professorLink = $("#professorLink");
    professorLink.setAttribute("aria-label", "Professor profile");
    professorLink.href = content.professor.profileUrl;
    professorLink.textContent = `${content.professor.name}, ${content.professor.affiliation}`;

    const index = course.weeks.findIndex((item) => item.id === topicId);
    const prev = course.weeks[index - 1];
    const next = course.weeks[index + 1];
    const nav = $("#topicNav");
    if (prev) nav.appendChild(topicNavLink("Previous", prev));
    nav.appendChild(topicNavLink("All topics", null));
    if (next) nav.appendChild(topicNavLink("Next", next));
  }

  function topicNavLink(label, targetWeek) {
    const link = document.createElement("a");
    if (targetWeek) {
      link.href = `./${content.topics[targetWeek.id].slug}.html`;
      link.textContent = `${label}: Week ${targetWeek.week}`;
    } else {
      link.href = "../topics.html";
      link.textContent = label;
    }
    return link;
  }

  renderTopic();
})();
