import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Өөрийн Firebase тохиргоог энд тавина:
const firebaseConfig = {
  apiKey: "ТАНЫ_API_KEY",
  authDomain: "ТАНЫ_AUTH_DOMAIN",
  projectId: "ТАНЫ_PROJECT_ID",
  storageBucket: "ТАНЫ_STORAGE_BUCKET",
  messagingSenderId: "ТАНЫ_SENDER_ID",
  appId: "ТАНЫ_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ZODIAC_ANIMALS = [
  "Бич", "Тахиа", "Нохой", "Гахай", "Хулгана", "Үхэр",
  "Бар", "Туулай", "Луу", "Могой", "Морь", "Хонь"
];

function getZodiacByYear(year) {
  const num = Number(year);
  if (!num) return "—";
  const idx = ((num % 12) + 12) % 12;
  return ZODIAC_ANIMALS[idx];
}

const memberListEl = document.getElementById("memberList");
const detailCardEl = document.getElementById("detailCard");

let members = [];
let selectedMember = null;
let photoIndex = 0;

function getPhotos(member) {
  if (Array.isArray(member.images) && member.images.length > 0) {
    return member.images;
  }
  if (member.imageUrl) {
    return [member.imageUrl];
  }
  return [];
}

function renderDetail() {
  if (!selectedMember) return;
  const photos = getPhotos(selectedMember);
  if (photoIndex >= photos.length) photoIndex = 0;

  const zodiac = selectedMember.zodiac || getZodiacByYear(selectedMember.birthYear);
  const currentPhoto = photos[photoIndex] || "";

  detailCardEl.innerHTML = `
    <h2>${selectedMember.name || "Нэргүй"}</h2>
    <div class="info-grid">
      <div class="info-box">
        <div class="info-label">Төрсөн он</div>
        <div class="info-value">${selectedMember.birthYear ?? "—"}</div>
      </div>
      <div class="info-box">
        <div class="info-label">Төрсөн өдөр</div>
        <div class="info-value">${selectedMember.birthDate || "—"}</div>
      </div>
      <div class="info-box">
        <div class="info-label">Жил</div>
        <div class="info-value">${zodiac}</div>
      </div>
    </div>

    ${photos.length > 0 ? `
      <div class="gallery-main">
        ${photos.length > 1 ? `<button class="nav-btn prev" id="prevBtn">‹</button>` : ""}
        <img src="${currentPhoto}" alt="${selectedMember.name || ""}" />
        ${photos.length > 1 ? `<button class="nav-btn next" id="nextBtn">›</button>` : ""}
      </div>
      ${photos.length > 1 ? `
        <div class="thumbs" id="thumbsBox">
          ${photos.map((url, idx) => `
            <img src="${url}" data-idx="${idx}" class="${idx === photoIndex ? "active" : ""}" alt="Зураг ${idx + 1}" />
          `).join("")}
        </div>
      ` : ""}
    ` : `<p>Зураг оруулаагүй байна.</p>`}
  `;

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbsBox = document.getElementById("thumbsBox");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      photoIndex = (photoIndex - 1 + photos.length) % photos.length;
      renderDetail();
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      photoIndex = (photoIndex + 1) % photos.length;
      renderDetail();
    });
  }
  if (thumbsBox) {
    thumbsBox.querySelectorAll("img").forEach((img) => {
      img.addEventListener("click", () => {
        photoIndex = Number(img.dataset.idx);
        renderDetail();
      });
    });
  }
}

function renderList() {
  memberListEl.innerHTML = "";
  members.forEach((m) => {
    const btn = document.createElement("button");
    btn.className = "member-btn" + (selectedMember?.id === m.id ? " active" : "");
    btn.innerHTML = `<span>${m.name || "Нэргүй"}</span><span>${m.birthYear || ""}</span>`;
    btn.addEventListener("click", () => {
      selectedMember = m;
      photoIndex = 0;
      renderList();
      renderDetail();
    });
    memberListEl.appendChild(btn);
  });
}

async function loadFamily() {
  try {
    const snap = await getDocs(collection(db, "family"));
    members = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    members.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

    if (members.length === 0) {
      memberListEl.innerHTML = "Firestore-ийн <code>family</code> collection хоосон байна.";
      return;
    }
    selectedMember = members[0];
    renderList();
    renderDetail();
  } catch (err) {
    console.error(err);
    memberListEl.innerHTML = "Өгөгдөл татахад алдаа гарлаа.";
  }
}

loadFamily();