export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: `/api/${message.msgeable_type.toLowerCase()}s/${message.msgeable_id}/messages`,
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
