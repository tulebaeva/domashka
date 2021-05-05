let users = [];

let userInfo = {
    name: '',
    age: '',
    biography: ''
}
var myModal = document.getElementById('newModal')
var myInput = document.getElementById('description')

myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
})

$('#yes').click(function () {
    users.push(
        document.getElementById("name").value,
        document.getElementById("age").value,
        document.getElementById("description").value)
        alert(users)
    })
    
    
    $('#name, #age, #description').change(function () {
        
        let _this = $(this)
        
        let fieldName = _this.attr('name')
        
        userInfo[fieldName] = _this.val()
    });
    