const messages = [
  {
    id: 1, sender: "Maya Chen", email: "maya.chen@figma.com", initials: "MC", avatar: "lavender",
    subject: "Design review: new dashboard concepts", snippet: "Hey Jordan, I've put together the latest concepts for the dashboard. Would love to get your thoughts before our sync…",
    time: "10:42 AM", label: "Work", labelStyle: "green-label", unread: true, starred: true, attachment: "Dashboard concepts.pdf", size: "2.4 MB",
    body: [
      "Hey Jordan,",
      "I've put together the latest concepts for the dashboard. Would love to get your thoughts before our sync tomorrow.",
      "The updated direction brings the key metrics forward and gives the inbox a little more breathing room. I also explored a couple of options for the mobile layout.",
      "Let me know what stands out — happy to walk through it together!",
      "Best,<br />Maya",
    ],
  },
  {
    id: 2, sender: "Alex Rivera", email: "alex.rivera@linear.app", initials: "AR", avatar: "mint",
    subject: "Re: Q3 product roadmap", snippet: "Thanks for sharing the notes! I added a few thoughts on the timeline and next steps…",
    time: "9:18 AM", label: "Work", labelStyle: "green-label", unread: true, starred: false,
    body: ["Hi Jordan,", "Thanks for sharing the notes! I added a few thoughts on the timeline and next steps. The priorities look good from my side, especially the onboarding improvements.", "Let's compare notes in our planning session this afternoon.", "Cheers,<br />Alex"],
  },
  {
    id: 3, sender: "Notion", email: "team@notion.so", initials: "N", avatar: "sky",
    subject: "Your weekly workspace digest", snippet: "Here's what happened in your workspace this week: 8 updates across 4 pages…",
    time: "8:56 AM", label: "Updates", labelStyle: "", unread: true, starred: false,
    body: ["Your weekly workspace digest is ready.", "There were 8 updates across 4 pages this week. Your team added new notes to the Product roadmap and Design system pages.", "Open your workspace to see everything that changed.", "The Notion team"],
  },
  {
    id: 4, sender: "Sam Patel", email: "sam.patel@gmail.com", initials: "SP", avatar: "peach",
    subject: "Weekend hiking plans 🏔", snippet: "Found a great trail for Saturday! The weather is looking perfect too…",
    time: "Yesterday", label: "Personal", labelStyle: "gold-label", unread: true, starred: false,
    body: ["Hey Jordan!", "Found a great trail for Saturday! The weather is looking perfect too. It's about a 5-mile loop, and there's a lake at the halfway point.", "Want to meet at the trailhead around 8? I'll bring coffee.", "Sam"],
  },
  {
    id: 5, sender: "Studio North", email: "hello@studionorth.design", initials: "SN", avatar: "rose",
    subject: "Invoice #2048 for your review", snippet: "Please find attached the invoice for the May design sprint. Payment is due June 15…",
    time: "Yesterday", label: "Work", labelStyle: "green-label", unread: true, starred: false, attachment: "Invoice-2048.pdf", size: "184 KB",
    body: ["Hi Jordan,", "Please find attached the invoice for the May design sprint. Payment is due June 15.", "Thanks again for a great collaboration. It was a pleasure working with your team, and we’re excited for what’s next.", "Warmly,<br />Studio North"],
  },
  {
    id: 6, sender: "Olivia Bennett", email: "olivia.b@company.com", initials: "OB", avatar: "sand",
    subject: "Lunch next week?", snippet: "Hey! It's been a while since we caught up. Are you free on Tuesday or Wednesday?…",
    time: "Mon", label: "Personal", labelStyle: "gold-label", unread: true, starred: false,
    body: ["Hey Jordan!", "It's been a while since we caught up. Are you free on Tuesday or Wednesday for lunch? There's a new spot near the office I've been wanting to try.", "Let me know what works!", "Olivia"],
  },
  {
    id: 7, sender: "Product Hunt", email: "digest@producthunt.com", initials: "P", avatar: "peach",
    subject: "Today’s top products are here", snippet: "Discover the products makers are talking about today…",
    time: "Mon", label: "Updates", labelStyle: "", unread: false, starred: false,
    body: ["The best new products, picked for you.", "Discover the products makers are talking about today, along with thoughtful reviews from the community.", "See today's launches on Product Hunt."],
  },
  {
    id: 8, sender: "Daniel Kim", email: "daniel.kim@company.com", initials: "DK", avatar: "sky",
    subject: "Notes from yesterday's all-hands", snippet: "A quick recap of the announcements and action items from our team meeting…",
    time: "Sun", label: "Work", labelStyle: "green-label", unread: false, starred: false, attachment: "All-hands-notes.docx", size: "96 KB",
    body: ["Hi team,", "A quick recap of the announcements and action items from our team meeting. The notes are attached for anyone who wants the full rundown.", "Reply here if I missed anything.", "Daniel"],
  },
  {
    id: 9, sender: "Airbnb", email: "automated@airbnb.com", initials: "A", avatar: "rose",
    subject: "Your receipt from Airbnb", snippet: "Thanks for booking. Here's your receipt for your upcoming stay…",
    time: "Sun", label: "Travel", labelStyle: "gold-label", unread: false, starred: true,
    body: ["Your trip is confirmed.", "Thanks for booking. Here's your receipt for your upcoming stay in Copenhagen.", "We hope you have a wonderful trip!"],
  },
  {
    id: 10, sender: "Priya Shah", email: "priya.shah@company.com", initials: "PS", avatar: "mint",
    subject: "Re: Brand guidelines feedback", snippet: "Made those tweaks you mentioned. The updated file is ready whenever you are…",
    time: "Sat", label: "Work", labelStyle: "green-label", unread: false, starred: false, attachment: "Brand-guidelines-v3.pdf", size: "3.1 MB",
    body: ["Hi Jordan,", "Made those tweaks you mentioned. The updated file is ready whenever you are. I adjusted the color contrast and simplified the icon set.", "Thanks for the thoughtful feedback!", "Priya"],
  },
  {
    id: 11, sender: "Spotify", email: "no-reply@spotify.com", initials: "S", avatar: "mint",
    subject: "Your Discover Weekly is ready", snippet: "A fresh playlist made just for you. 30 tracks picked for your week…",
    time: "Sat", label: "Updates", labelStyle: "", unread: false, starred: false,
    body: ["Your Discover Weekly is ready.", "A fresh playlist made just for you. 30 tracks picked for your week.", "Press play and find your next favorite."],
  },
  {
    id: 12, sender: "Emma Wilson", email: "emma.w@company.com", initials: "EW", avatar: "lavender",
    subject: "Welcome aboard, Jordan!", snippet: "So excited to have you join the project. Here are a few resources to get started…",
    time: "Fri", label: "Work", labelStyle: "green-label", unread: false, starred: false,
    body: ["Hi Jordan,", "So excited to have you join the project! Here are a few resources to get started. Give me a shout if you have any questions — happy to help.", "Welcome aboard!", "Emma"],
  },
];

let selectedId = 1;
let activeFilter = "all";
let activeFolder = "Inbox";
let searchTerm = "";
let toastTimer;

const listElement = document.querySelector("#message-list");
const previewElement = document.querySelector("#message-preview");
const dialog = document.querySelector("#compose-dialog");
const toastElement = document.querySelector("#toast");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function visibleMessages() {
  let result = [...messages];
  if (activeFolder === "Inbox") result = result.filter((message) => !message.archived && !message.sent);
  else if (activeFolder === "Starred") result = result.filter((message) => message.starred);
  else if (activeFolder === "Snoozed" || activeFolder === "Drafts") result = [];
  else if (activeFolder === "Sent") result = result.filter((message) => message.sent);
  else if (activeFolder === "Archive") result = result.filter((message) => message.archived);
  else if (["Work", "Personal", "Travel"].includes(activeFolder)) result = result.filter((message) => message.label === activeFolder);

  if (activeFilter === "unread") result = result.filter((message) => message.unread);
  if (activeFilter === "attachments") result = result.filter((message) => message.attachment);
  if (searchTerm) {
    const query = searchTerm.toLowerCase();
    result = result.filter((message) => [message.sender, message.email, message.subject, message.snippet].join(" ").toLowerCase().includes(query));
  }
  return result;
}

function renderList() {
  const filteredMessages = visibleMessages();
  if (!filteredMessages.some((message) => message.id === selectedId)) selectedId = filteredMessages[0]?.id ?? null;

  if (filteredMessages.length === 0) {
    listElement.innerHTML = '<div class="list-empty">No messages here just yet.</div>';
    previewElement.innerHTML = '<div class="preview-empty"><span>✉</span><strong>Nothing to show</strong><p>Try another folder or search.</p></div>';
    return;
  }

  listElement.innerHTML = filteredMessages.map((message) => `
    <article class="message-item ${message.unread ? "unread" : ""} ${message.id === selectedId ? "selected" : ""}" data-id="${message.id}" tabindex="0" role="button" aria-label="Open email from ${escapeHTML(message.sender)}: ${escapeHTML(message.subject)}">
      <span class="avatar message-avatar avatar-${message.avatar}">${escapeHTML(message.initials)}</span>
      <div class="message-content">
        <div class="message-topline"><span class="message-sender">${escapeHTML(message.sender)}</span><span class="message-time">${escapeHTML(message.time)}</span></div>
        <div class="message-subject">${escapeHTML(message.subject)}</div>
        <div class="message-snippet">${escapeHTML(message.snippet)}</div>
        <div class="message-meta">${message.label ? `<span class="message-label ${message.labelStyle}">${escapeHTML(message.label)}</span>` : ""}${message.attachment ? '<span class="message-attachment" title="Has attachment">⌁</span>' : ""}</div>
      </div>
      <div class="message-actions"><button class="star-button ${message.starred ? "starred" : ""}" type="button" data-star="${message.id}" aria-label="${message.starred ? "Remove star" : "Star"} email">${message.starred ? "★" : "☆"}</button></div>
    </article>`).join("");

  renderPreview(messages.find((message) => message.id === selectedId));
  updateCounters();
}

function renderPreview(message) {
  if (!message) return;
  previewElement.innerHTML = `
    <div class="preview-actions">
      <button class="preview-action" data-action="archive" type="button" title="Archive">▱ <span>Archive</span></button>
      <button class="preview-action" data-action="star" type="button" title="Star">☆ <span>Star</span></button>
      <button class="preview-action" data-action="reply" type="button" title="Reply">↩ <span>Reply</span></button>
      <button class="preview-action" data-action="more" type="button" title="More">···</button>
    </div>
    <h2 class="preview-subject">${escapeHTML(message.subject)}</h2>
    <div class="preview-sender-row">
      <span class="avatar avatar-${message.avatar}">${escapeHTML(message.initials)}</span>
      <div class="preview-sender-copy"><strong>${escapeHTML(message.sender)}</strong><span>${escapeHTML(message.email)}</span></div>
      <span class="preview-date">${escapeHTML(message.time)} · to me⌄</span>
    </div>
    <div class="preview-body">${message.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      ${message.attachment ? `<div class="preview-attachment"><span class="attachment-icon">PDF</span><span class="attachment-copy"><strong>${escapeHTML(message.attachment)}</strong><small>${escapeHTML(message.size)} · PDF document</small></span><a class="download-link" href="#" aria-label="Download attachment">↓</a></div>` : ""}
    </div>
    <button class="preview-reply" data-action="reply" type="button"><span class="avatar reply-avatar avatar-profile">JD</span><span>Click here to reply…</span><span class="reply-arrow">↩</span></button>`;
  updateCounters();
}

function updateCounters() {
  const unread = messages.filter((message) => message.unread).length;
  document.querySelector("#unread-total").textContent = String(unread);
  document.querySelector("#unread-count").textContent = String(unread);
  document.querySelector("#inbox-count").textContent = String(unread);
  document.querySelector("#all-count").textContent = String(visibleMessages().length);
  document.querySelector("#total-emails").textContent = (1284 + messages.filter((message) => message.sent).length).toLocaleString();
  document.querySelector("#mail-range").textContent = visibleMessages().length ? `1–${visibleMessages().length} of 1,284` : "0 messages";
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastElement.classList.remove("visible"), 2600);
}

listElement.addEventListener("click", (event) => {
  const starButton = event.target.closest("[data-star]");
  if (starButton) {
    const message = messages.find((item) => item.id === Number(starButton.dataset.star));
    message.starred = !message.starred;
    renderList();
    return;
  }
  const item = event.target.closest(".message-item");
  if (item) {
    selectedId = Number(item.dataset.id);
    const message = messages.find((entry) => entry.id === selectedId);
    message.unread = false;
    renderList();
    if (window.matchMedia("(max-width: 650px)").matches) {
      listElement.classList.add("preview-open");
      previewElement.classList.add("preview-open");
      previewElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

listElement.addEventListener("keydown", (event) => {
  const item = event.target.closest(".message-item");
  if (item && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    item.click();
  }
});

previewElement.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "archive") {
    const message = messages.find((entry) => entry.id === selectedId);
    if (message) message.archived = true;
    showToast("Email archived");
    renderList();
  } else if (action === "star") {
    const message = messages.find((entry) => entry.id === selectedId);
    if (message) message.starred = !message.starred;
    renderList();
  } else if (action === "reply") {
    document.querySelector("#compose-to").value = messages.find((entry) => entry.id === selectedId)?.email ?? "";
    document.querySelector("#compose-subject").value = `Re: ${messages.find((entry) => entry.id === selectedId)?.subject ?? ""}`;
    dialog.showModal();
    document.querySelector("#compose-body").focus();
  } else if (event.target.closest(".download-link")) {
    event.preventDefault();
    showToast("Attachment preview is available in this demo.");
  } else if (action === "more") {
    showToast("More message actions coming soon.");
  }
});

document.querySelectorAll(".nav-item[data-folder]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFolder = button.dataset.folder;
    document.querySelector("#sidebar").classList.remove("sidebar-open");
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelector("#breadcrumb-folder").textContent = activeFolder;
    document.querySelector("#page-heading").innerHTML = activeFolder === "Inbox" ? 'Good morning, Jordan <span class="wave" aria-hidden="true">✳</span>' : escapeHTML(activeFolder);
    listElement.classList.remove("preview-open");
    previewElement.classList.remove("preview-open");
    renderList();
  });
});

document.querySelectorAll(".mail-tab").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".mail-tab").forEach((tab) => {
      const selected = tab === button;
      tab.classList.toggle("selected", selected);
      tab.setAttribute("aria-selected", String(selected));
    });
    renderList();
  });
});

document.querySelector("#search-input").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderList();
});

document.querySelector("#compose-button").addEventListener("click", () => dialog.showModal());
document.querySelector("#close-compose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector("#compose-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const recipient = document.querySelector("#compose-to").value.trim();
  const subject = document.querySelector("#compose-subject").value.trim();
  const body = document.querySelector("#compose-body").value.trim();
  if (!recipient || !subject || !body) {
    showToast("Please complete all message fields.");
    return;
  }
  const name = recipient.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  messages.unshift({
    id: Date.now(), sender: `To: ${name}`, email: recipient, initials: "JD", avatar: "mint",
    subject, snippet: body, time: "Just now", label: "", labelStyle: "", unread: false,
    starred: false, sent: true, body: [escapeHTML(body).replace(/\n/g, "<br />")],
  });
  dialog.close();
  event.target.reset();
  activeFolder = "Sent";
  activeFilter = "all";
  searchTerm = "";
  document.querySelector("#search-input").value = "";
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.folder === "Sent"));
  document.querySelectorAll(".mail-tab").forEach((tab) => {
    const selected = tab.dataset.filter === "all";
    tab.classList.toggle("selected", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  document.querySelector("#breadcrumb-folder").textContent = "Sent";
  document.querySelector("#page-heading").textContent = "Sent";
  selectedId = messages[0].id;
  renderList();
  showToast("Message sent (demo only).");
});

document.querySelector("#add-label").addEventListener("click", () => showToast("Custom labels are coming soon."));
document.querySelector("#previous-page").addEventListener("click", () => showToast("You’re on the first page."));
document.querySelector("#next-page").addEventListener("click", () => showToast("You’re viewing the latest messages."));
document.querySelector("#more-button").addEventListener("click", () => showToast("Choose a message to see more actions."));
document.querySelector("#menu-button").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("sidebar-open");
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#search-input").focus();
  }
  if (event.key.toLowerCase() === "c" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) && !dialog.open) {
    dialog.showModal();
    document.querySelector("#compose-to").focus();
  }
  if (event.key === "Escape" && window.matchMedia("(max-width: 650px)").matches) {
    listElement.classList.remove("preview-open");
    previewElement.classList.remove("preview-open");
  }
});

const date = new Date();
document.querySelector("#welcome-date").textContent = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(date).toUpperCase();
renderList();
