export const fetchDMs = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/direct_messages',
        data
    })
);

export const deleteDM = id => (
    $.ajax({
        method: "DELETE",
        url: `/api/direct_messages/${id}`
    })
)