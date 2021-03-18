export const fetchMessages = (data) => (
    $.ajax({
        method: 'GET',
        url: `/api/${data.type}/${data.id}/messages`,
    })
);

export const fetchMessage = (hive_id, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/hives/${hive_id}/messages/${id}`,
    })
);

export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: `/api/${message.msgeable_type.split('t').join('t_').toLowerCase()}s/${message.msgeable_id}/messages`,
        data: { message },
    })
);

// export const editMessage = (message) => (
//     $.ajax({
//         method: 'POST',
//         url: `/api/${message.msgeable_type.toLowerCase()}s/${message.msgeable_id}/messages`,
//         data: { message },
//     })
// );
