const items = {};

/* รายการ Spirited Away */
items.spirited = {
  id: "speckle-cat",
  name: "Rusty cat",
  group: "cats",
  category: "แมว",
  maker: "สนิมแมวข้างบ้าน",
  makerLabel: "ตำแหน่ง",
  caption: "แมวข้างบ้านที่แวะมานอนเล่น จนเหมือนบ้านนี้เป็นบ้านตัวเอง",
  description:
    "แมวสีเปรอะข้างบ้านตั้งชื่อว่าแต้ม บ้านเราเรียก สนิม " +
    "มันชอบกลิ้งหลุน ๆ โชว์พุงป่องให้ดู แต่ถึงจะหมันเขี้ยวแค่ไหนก็ตาม " +
    "ทุกครั้งที่พยายามจับพุง มันก็จะเอาอุ้งเท้าน้อย ๆ มาดันที่มือ เป็นการบอกว่า 'อย่าแตะนะ' " ,
  story:
    "ถึงจะไม่ใช่แมวที่บ้านเรา แต่ก็แวะเวียนมานอนให้เห็นอยู่บ่อย ๆ" +
    "จากแมวขี้กลัววันนี้กลับนอนอย่างสบายใจเหมือนบ้านนี้เป็นบ้านตัวเองเลยล่ะ" ,
  image: "assets/images/collection/speckle-cat.jpg",
  related: ["ram", "cookie"],
};

/* รายการ Random Access Memories */
items.ram = {
  id: "ram",
  name: "Nine Lives, Zero Fear",
  group: "cats",
  category: "แมว",
  maker: "นักเสี่ยงภัย",
  makerLabel: "ตำแหน่ง",
  caption: "เก้าชีวิตก็ยังใช้ชีวิตเสี่ยงเกินไป",
  description:
    "เจ้าแมวส้มที่เลือกใช้ชีวิตบนขอบระเบียง" +
    "นั่งนิ่งราวกับเป็นเรื่องธรรมดา ทั้งที่คนมองแทบหยุดหายใจ",
  story:
    "เขาว่ากันว่าแมวมีเก้าชีวิต แต่เห็นน้องนั่งแบบนี้แล้ว" +
    "เราได้แต่ลุ้นอยู่ห่าง ๆ อย่าตกนะ",
  image: "assets/images/collection/nine-lives.jpg",
  related: ["prince", "budapest"],
};

/* รายการ Nap Champion */
items.prince = {
  id: "prince",
  name: "Nap Champion",
  group: "cats",
  category: "แมว",
  maker: "นักนอนมืออาชีพ",
  makerLabel: "ตำแหน่ง",
  caption: "ขออีกห้านาทีนะแง้วว",
  description:
    "เจอทีไรก็นอนปุ๋ยทุกที เห็นแล้วก็อดเอ็นดูไม่ได้ " +
    "ไม่รู้ว่าเหนื่อยจากการใช้ชีวิต หรือแค่ง่วงเฉย ๆ กันแน่นะ",
  story:
    "บางทีก็แค่อยากเก็บภาพช่วงเวลาน่ารัก ๆ ของเจ้าเหมียวไว้ " +
    "ถึงจะเป็นแค่ตอนนอนเฉย ๆ แต่ก็ทำให้ยิ้มได้ทุกครั้งที่กลับมาดู",
  image: "assets/images/collection/nap-cat.jpg",
  related: ["ram", "x100"],

};

/* รายการ Black Cat */
items.x100 = {
  id: "x100",
  name: "Black Cat",
  group: "cats",
  category: "แมว",
  maker: "นักสำรวจ",
  makerLabel: "ตำแหน่ง",
  caption: "ดำปิ้ดแบบนี้เรียกสำลีก็แล้วกัน",
  description:
    "แมวจรสีดำเรียกเฉาก๊วยคงจำเจ เรียกสำลีคงน้อยที่จะซ้ำใคร " +
    "เหมาะเลยล่ะว่าไหม",
  story:
    "ถึงจะดูดุเนื้อตัวขนแหว่ง ๆ แต่ก็ตกง่าย ๆ ด้วยเปียกซองเดียว " +
    "กินเสร็จเป็นเด็กดีนอนแอ้งโชว์พุงป่อง ๆ ให้ถ่ายรูปได้เรื่อย ๆ",
  image: "assets/images/collection/black-cat.jpg",
  related: ["spirited", "hobbit"],
};

/* รายการ Tiny Boss */
items.budapest = {
  id: "budapest",
  name: "Tiny Boss",
  group: "cats",
  category: "แมว",
  maker: "ลูกเจ้าของร้าน",
  makerLabel: "ตำแหน่ง",
  caption: "ตัวจิ๋วแต่ความจริงเป็นประธานบริษัท",
  description:
    "นายใหญ่ประจำร้าน นั่งเฝ้าร้านอย่างสุขุม ดูนิ่ง ๆ แต่ดูเหมือนกำลังคอยตรวจความเรียบร้อยของร้านอยู่  " +
    " คำชมไม่ต้อง รับแค่เปียกซองก็พอแล้ว",
  story:
    "ตอนแรกตั้งใจไปกินก๋วยเตี๋ยว แต่สุดท้ายจำลูกเจ้าของร้านได้มากกว่ารสชาติเตี๋ยวอีก 5555 " +
    "นั่งนิ่ง ๆ ทำหน้าเหมือนร้านนี้เป็นของตัวเอง ก็เลยต้องขอเก็บภาพผู้จัดการตัวจิ๋วไว้สักหน่อยนะ",
  image: "assets/images/collection/Tiny-boss.jpg",
  related: ["ram", "cookie"],
};

/* รายการ AM */
items.am = {
  id: "am",
  name: "Playful Potato",
  group: "cats",
  category: "แมว",
  maker: "นักนอนกลิ้ง",
  makerLabel: "ตำแหน่ง",
  caption: "ท่านอนนี้มีความสุขที่สุดแล้ว",
  description:
    "เจ้าแมวส้มที่กำลังนอนกลิ้งเล่นอยู่ใต้แอร์ " +
    "ดูสบายใจจนเหมือนลืมไปแล้วว่าตัวเองอยู่ที่ไหน",
  story:
    "เห็นท่าทางตอนน้องกลิ้งเล่นแล้วอดยิ้มไม่ได้ " +
    "เป็นช่วงเวลาเล็ก ๆ ที่ทำให้วันนั้นมีความสุขขึ้นมาทันที",
  image: "assets/images/collection/playful-potato.jpg",
  related: ["hobbit", "x100"],
};

/* รายการ The Hobbit */
items.hobbit = {
  id: "hobbit",
    name: "Ginger Glance",
    group: "cats",
    category: "แมว",
    maker: "นายแบบตอนเผลอ",
    makerLabel: "ตำแหน่ง",
    caption: "หันมามองกันพอดีเลยนะ",
  description:
    "เจ้าแมวส้มนั่งอยู่ท่ามกลางพื้นดินและใบไม้" +
    "ก่อนจะหันกลับมามองกล้องเหมือนรู้ว่ากำลังถูกถ่ายรูป",
  story:
    "ชอบจังหวะที่น้องหันกลับมาตอนกดถ่ายรูปพอดี" +
    "จังหวะสบตาสั้น ๆ ก่อนน้องจะวิ่งจู้ดหนีเพราะกลัวคน",
    image: "assets/images/collection/ginger-glance.jpg",
  related: ["budapest", "cookie"],
};

/* รายการ Cozy Cookie */
items.cookie = {
    id: "cookie",
    name: "Cozy Cookie",
    group: "cats",
    category: "แมว",
    maker: "ผู้ครองพื้นที่พักผ่อน",
    makerLabel: "ตำแหน่ง",
    caption: "เจอที่นอนสบาย ๆ ก็ทิ้งตัวทันที",
    description:
        "เจ้าเหมียวที่กำลังนอนพักอย่างสบายใจในมุมหนึ่ง " +
        "ดูเหมือนจะกำลังเพลิดเพลินกับเวลาพักผ่อนของตัวเอง",
    story:
        "เดินเล่นอยู่ดี ๆ สายตาดันเหลือบไปเห็นเจ้าก้อนสีดำ " +
        "ดูเหมือนกำลังงีบในมุมโปรดของตัวเอง งั้นไม่กวนเวลานอนนะเจ้าแมวตัวน้อย",
    image: "assets/images/collection/cozy-cookie.jpg",
    related: ["prince", "hobbit"],
};

/* อ่าน id จาก URL */
const itemId =
  new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Personal Collection";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */
if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Personal Collection";
}