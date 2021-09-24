console.log('todo app')

function login (evt) {
    evt.preventDefault()
    console.log(evt)
    var theFormData = {};
    for (i=0;i<evt.target.length;i++) {
        theFormData[evt.target[i].name]  =
        evt.target[i].value;
    }

    fetch(evt.target.action, 
        {
            method: 'POST',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

function register (evt) {
    evt.preventDefault()
    console.log(evt)
    var theFormData = {};
    for (i=0;i<evt.target.length;i++) {
        theFormData[evt.target[i].name]  =
        evt.target[i].value;
    }

    fetch(evt.target.action, 
        {
            method: 'PUT',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

//DOESN'T WORK
function userexists (evt) {
    evt.preventDefault()
    url = evt.target.action + '?username=' + evt.target[0].value;
    fetch(url, 
        {
            method: 'GET',
            credentials: 'include',
        })
}

function userloggedin (evt) {
    evt.preventDefault()
    fetch(evt.target.action,
        {
            method: 'GET',
            credentials: 'include'
        }
      )
}

function userlogout (evt) {
    evt.preventDefault()
    fetch(evt.target.action,
        {
            method: 'GET',
            credentials: 'include'
        }
      )
}


function getcategories (evt) {
    evt.preventDefault()
    fetch(evt.target.action,
        {
            method: 'GET',
            credentials: 'include'
        }
      )
}
function addcategory (evt) {
    evt.preventDefault()
    method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function updatecategory (evt) {
    evt.preventDefault()
    method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function gettodos (evt) {
    evt.preventDefault()
    method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function addtodo(evt) {
    evt.preventDefault()
    method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function deltodo(evt) {
    evt.preventDefault()
    method = {method: evt.target.method}
    fetch(evt.target.action, method)
}

function updatetodo(evt) {
    evt.preventDefault()
    method = {method: evt.target.method}
    fetch(evt.target.action, method)
}
