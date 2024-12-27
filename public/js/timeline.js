const timelineData = [
  {
    title: "where it all began",
    date: "april 7",
    description: "the dm",
    image: "assets/apr7.jpg",
  },
  {
    title: "where it went...",
    date: "may 4",
    description: "our first date",
    image: "assets/may4.jpg",
  },
  {
    title: "we both know where this image is from lol...",
    date: "may 17",
    description: "omg big day !!",
    image: "assets/may17.jpg",
  },
  {
    title: "omg look at us, so cute !!",
    date: "may 28",
    description: "one of those days w/ mila",
    image: "assets/may28.jpg",
  },
  {
    title: "cat cafe !!",
    date: "june 6",
    description: "we should have adopted at least 4 of them",
    image: "assets/jun6.jpg",
  },
  {
    title: "who's in paris??",
    date: "june 7",
    description: "i think we almost crashed this day",
    image: "assets/jun7.jpg",
  },
  {
    title: "us on one of our adventures",
    date: "june 21",
    description: "exploring some random lake we found",
    image: "assets/jun21.jpg",
  },
  {
    title: "our first roadtrip together !",
    date: "june 28",
    description: "we drove 3 hours to hang out for like an hour lol",
    image: "assets/jun28.jpg",
  },
  {
    title: "happy birthday!!!",
    date: "jada day (july 14)",
    description: "i love your outfit btw, who picked it, omg???",
    image: "assets/jul15.jpg",
  },
  {
    title: "the best korean food in NA",
    date: "august 2",
    description: "we left NO crumbs",
    image: "assets/aug2.jpeg",
  },
  {
    title: "first day as a medical assistant",
    date: "august 13",
    description: "always so proud of you",
    image: "assets/aug13.jpg",
  },
  {
    title: "cary downtown (ft. mila)",
    date: "august 26",
    description: "i thought i was third wheeling lol",
    image: "assets/aug26.jpg",
  },
  {
    title: "my first concert (ft. my beloved)",
    date: "september 11",
    description: "just glad i didn't blow up !!",
    image: "assets/sep11.jpg",
  },
  {
    title: "fayetteville adventures pt.1",
    date: "october 26",
    description: "it's always a blast when my babygirl bryan is around",
    image: "assets/oct26.jpg",
  },
  {
    title: "us vs. jc arboretum, round 2",
    date: "november 15",
    description: "the marshmallows were so good...",
    image: "assets/nov15_1.jpg",
  },
  {
    title: "the day we almost died",
    date: "november 26",
    description: "damnit mila, i shoulda known.",
    image: "assets/nov26.jpg",
  },
  {
    title: "our second roadtrip (ft. pierce the veil !!)",
    date: "november 27",
    description: "lighting fireworks indoors is definitely NOT up to fire code",
    image: "assets/nov27.jpg",
  },
  {
    title: "our first thanksgiving !",
    date: "november 28",
    description:
      "there was SOOO many people (but I loved it) p.s. i'm an uno pro",
    image: "assets/nov28.jpg",
  },
  {
    title: "christmas lights!",
    date: "dec 1",
    description: "the wax candy was underrated, 10/10 would get again",
    image: "assets/dec1.jpg",
  },
  {
    title: "bryan in his element fr",
    date: "dec 5",
    description: "i didn't expect to meet patty for a while tbh!",
    image: "assets/dec5.jpg",
  },
  {
    title: "first car show together",
    date: "dec 7",
    description: "are you asking me on a date?",
    image: "assets/dec7.jpg",
  },
];

const timelineContainer = document.querySelector(".timeline");

timelineData.forEach((item, index) => {
  const container = document.createElement("div");
  container.classList.add("container");
  if (index % 2 === 0) {
    container.classList.add("left");
  } else {
    container.classList.add("right");
  }

  if (index === timelineData.length - 1) {
    container.classList.add("last_container");
  }

  const content = document.createElement("div");
  content.classList.add("content");

  const title = document.createElement("h2");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.title;

  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(image);

  container.appendChild(content);
  timelineContainer.appendChild(container);
});
