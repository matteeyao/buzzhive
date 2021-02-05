export const fetchHives = (data) => (
    $.ajax({
        method: 'GET',
        url: 'api/hives',
        data
    })
);

export const fetchHive = id => (
    $.ajax({
        method: 'GET',
        url: `api/hives/${id}`
    })
);

export const createHive = hiveForm => (
    $.ajax({
        method: 'POST',
        url: 'api/hives',
        data: hiveForm,
        contentType: false,
        processData: false
    })
);

export const searchHives = () => (
    $.ajax({
        method: "GET",
        url: `/api/hives/?hive[search]=true`
    })
)