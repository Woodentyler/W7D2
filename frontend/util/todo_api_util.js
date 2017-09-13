export const fetchRequest = () => {
  return ($.ajax({
    method: 'GET',
    url: '/api/todos'
  }));
};

export const postRequest = (todo) => {
  return ($.ajax({
    method: 'post',
    url: 'api/todos',
    data: {todo}
  }));
};

export const updateRequest = todo => {
  return ($.ajax({
    method: 'patch',
    url: `/api/todos/${todo.id}`,
    data: {todo}
  }));
};

export const deleteRequest = todo => {
  return ($.ajax({
    method: 'delete',
    url: `/api/todos/${todo.id}`
  }));
};

window.fetchRequest = fetchRequest;
