// signing a user in
export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

// creating user
export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/user',
        data: { user }
    })
);

// delete session and logout user
export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);
