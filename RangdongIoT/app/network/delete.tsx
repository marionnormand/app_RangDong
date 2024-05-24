const todoId = '0'; 
const apiUrl = 'https://digitaldev.io.vn/todos/Testdb_Todo/dbmarion' + todoId;
const content_type = 'application/json';

export const handleDeleteRequest = () => {
    fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': content_type
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Todo deleted successfully');
    })
    .catch(error => {
        console.error('There was a problem deleting the todo:', error);
    });
}