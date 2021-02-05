json.array! @hives do |hive|
    json.partial! '/api/hives/hive', hive: hive
end
