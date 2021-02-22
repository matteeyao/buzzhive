json.hive do
    json.partial! '/api/hives/hive', hive: @hive
end

json.hiveUsers do
    @hive_users.each do |hive_user|
        json.set! hive_user.user_id do
            json.partial! '/api/users/user', user: hive_user.user
        end
    end
end