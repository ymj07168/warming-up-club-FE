const count = 20;
let itemIndex = 0;

const observer = new IntersectionObserver(
  (entries) => {
    console.log("entries", entries);

    entries.forEach((entry) => {
      const list = document.querySelector(".list");

      if (entry.isIntersecting) {
        for (let i = itemIndex; i < itemIndex + count; i++) {
          let item = document.createElement("p");

          item.textContent = i;
          item.className += "item";
          list.appendChild(item);
        }

        itemIndex = itemIndex + count;
      }
    })
  },
  { root: null, threshold: 0.1 }
);

observer.observe(document.querySelector(".end"));

// intersection : 타겟이 뷰포트 안에 있으면 true
// intersectionRatio : 들어와 있는 비율
