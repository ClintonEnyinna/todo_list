let data = [
  {
    group: 'projects',
    items: [],
  },
  {
    group: 'work',
    items: [],
  },
  {
    group: 'music',
    items: [],
  },
];

const myData = JSON.parse(localStorage.getItem('data'));

if (myData) {
  data = myData;
}

// add items to a group
// groupName is a string

const addGroupItems = (
  data,
  groupName,
  title,
  date,
  priority,
  desc,
  status = false
) => {
  const getGroupIndex = data.findIndex(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase()
  );
  data[getGroupIndex].items.push({
    title: title,
    date: date,
    priority: priority,
    desc: desc,
    status: status,
  });
  localStorage.setItem('data', JSON.stringify(data));
};

// add a group to the data
// name is a string
const addGroup = (data, name) => {
  data.push({ group: name, items: [] });
  localStorage.setItem('data', JSON.stringify(data));
};

// get items given group name
// groupName is a string, should be a string
const getGroupItems = (data, groupName) => {
  let specifGroup = data.find(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase()
  );

  return specifGroup;
};

// get all individual item data given group and item title

const getAllItemData = (data, groupName, titleName) => {
  let specifGroup = data.find(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase()
  );
  let itemData = specifGroup.items.find(
    ({ title }) => title.toLowerCase() === titleName.toLowerCase()
  );
  return itemData;
};

const delTodoItem = (data, groupName, titleName) => {
  const getGroupIndex = data.findIndex(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase()
  );
  const getGroupItemsIdex = data[getGroupIndex].items.findIndex(
    ({ title }) => title.toLowerCase() === titleName.toLowerCase()
  );
  data[getGroupIndex].items.splice(getGroupItemsIdex, 1);
};

export {
  data,
  getAllItemData,
  getGroupItems,
  addGroup,
  addGroupItems,
  delTodoItem,
};
