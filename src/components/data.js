let data = [
  {
    group: "projects",
    items: [
      {
        title: "start project 1",
        priority: "high",
        date: "march",
        desc: "have it done",
      },
      {
        title: "start project 2",
        priority: "high",
        date: "march",
        desc: "have it done",
      },
      {
        title: "start project 3",
        priority: "high",
        date: "march",
        desc: "have it done",
      },
      {
        title: "start project 4",
        priority: "high",
        date: "march",
        desc: "have it done",
      },
    ],
  },

  {
    group: "work",
    items: [
      {
        title: "go to work",
        priority: "low",
        date: "march",
        desc: "have it done",
      },
      {
        title: "go to work",
        priority: "low",
        date: "march",
        desc: "have it done",
      },
      {
        title: "go to work",
        priority: "low",
        date: "march",
        desc: "have it done",
      },
      {
        title: "go to work",
        priority: "low",
        date: "march",
        desc: "have it done",
      },
    ],
  },
  {
    group: "music",
    items: [
      {
        title: "start music 01",
        priority: "medium",
        date: "march",
        desc: "have it done",
      },
      {
        title: "start music 02",
        priority: "medium",
        date: "march",
        desc: "have it done",
      },
      {
        title: "start music 03",
        priority: "medium",
        date: "march",
        desc: "have it done",
      },
      {
        title: "start music 04",
        priority: "medium",
        date: "march",
        desc: "have it done",
      },
    ],
  },
];

const myData = JSON.parse(localStorage.getItem("data"));
if (myData) {
  data = myData;
}

// add items to a group
// groupName is a string

const addGroupItems = (data, groupName, title, date, priority,desc) => {
  const getGroupIndex = data.findIndex(({ group }) => group === groupName);
  data[getGroupIndex].items.push({
    title: title,
    date: date,
    priority: priority,
    desc: desc,
  });
  localStorage.setItem("data", JSON.stringify(data));
};

// add a group to the data
// name is a string
const addGroup = (data, name) => {
  data.push({ group: name, items: [] });
  localStorage.setItem("data", JSON.stringify(data));
};

// get data group names
const getGroup = (data) => {
  let element = "";
  for (let index = 0; index < data.length; index++) {
    element = data[index].group;
  }
  return element;
};

// get items given group name
// groupName is a string, should be a string
const getGroupItems = (data, groupName) => {
  let specifGroup = data.find(({ group }) => group === groupName);
  
  return specifGroup;
};

// get all individual item data given group and item title

const getAllItemData = (data, groupName, titleName) => {
  let specifGroup = data.find(({ group }) => group === groupName);
  let itemData = specifGroup.items.find(({ title }) => title === titleName);
  return itemData;
};

export {
  data,
  getAllItemData,
  getGroupItems,
  getGroup,
  addGroup,
  addGroupItems,
};
