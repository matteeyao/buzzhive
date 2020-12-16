json.hive do
    json.partial! '/api/hives/hive', hive: @hive
end

json.messages do
    @messages.each do |message|
        json.set! message.id do
            json.partial! '/api/messages/message', message: message
        end
    end
end

json.hiveUsers do
    @hive_users.each do |hive_user|
        json.set! hive_user.user_id do
            json.partial! '/api/users/user', user: hive_user.user
        end
    end
end