export const subscribe = id => (
    $.ajax({
        method: 'POST',
        url: `api/hives/${id}/hive_users`,
    })
);