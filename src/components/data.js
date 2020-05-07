let data = [
  {
    group: "projects",
    items: [],
  },

  {
    group: "work",
    items: [],
  },
  {
    group: "music",
    items: [],
  },
];

const myData = JSON.parse(localStorage.getItem("data"));
if (myData) {
  data = myData;
}

// add items to a group
// groupName is a string

const addGroupItems = (data, groupName, title, date, priority, desc) => {
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

export { data, getAllItemData, getGroupItems, addGroup, addGroupItems };
