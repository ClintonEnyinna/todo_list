
// add items to a group
// groupName is a string

const addGroupItems = (
  data,
  groupName,
  title,
  date,
  priority,
  desc,
  status = false,
) => {
  const getGroupIndex = data.findIndex(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase(),
  );
  data[getGroupIndex].items.push({
    title,
    date,
    priority,
    desc,
    status,
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
  const specifGroup = data.find(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase(),
  );

  return specifGroup;
};

// get all individual item data given group and item title

const getAllItemData = (data, groupName, titleName) => {
  const specifGroup = data.find(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase(),
  );
  const itemData = specifGroup.items.find(
    ({ title }) => title.toLowerCase() === titleName.toLowerCase(),
  );
  return itemData;
};

const delTodoItem = (data, groupName, titleName) => {
  const getGroupIndex = data.findIndex(
    ({ group }) => group.toLowerCase() === groupName.toLowerCase(),
  );
  const getGroupItemsIdex = data[getGroupIndex].items.findIndex(
    ({ title }) => title.toLowerCase() === titleName.toLowerCase(),
  );
  data[getGroupIndex].items.splice(getGroupItemsIdex, 1);
};

export {
  getAllItemData,
  getGroupItems,
  addGroup,
  addGroupItems,
  delTodoItem,
};
