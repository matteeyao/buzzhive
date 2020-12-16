@hives.each do |hive|
    json.set! hive.id do
        json.partial! 'hive', hive: hive
    end
end
