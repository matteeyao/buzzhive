json.extract! direct_message, :id, :author_id

json.users do
    direct_message.direct_message_users.each do |direct_message_user|
        json.set! direct_message_user.user_id do
            json.partial! '/api/users/user', user: direct_message_user.user
        end
    end
end
