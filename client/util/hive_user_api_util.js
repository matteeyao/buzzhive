export const subscribe = hiveUserForm => (
    $.ajax({
        method: 'POST',
        url: `api/hives/${hiveUserForm.hive_id}/hive_users`,
        data: {hive_user: hiveUserForm},
    })
);

export const unsubscribe = hiveUserForm => (
    $.ajax({
        method: 'DELETE',
        url: `api/hives/${hiveUserForm.hive_id}/hive_users`,
        data: {hive_user: hiveUserForm},
    })
);