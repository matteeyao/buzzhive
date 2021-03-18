export const fetchDMs = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/direct_messages',
        data
    })
);

export const fetchDM = id => (
    $.ajax({
        method: 'GET',
        url: `api/direct_messages/${id}`
    })
);

export const createDM = dmForm => (
    $.ajax({
        method: 'POST',
        url: 'api/direct_messages',
        data: {direct_message: dmForm},
    })
);

export const deleteDM = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/direct_messages/${id}`
    })
)