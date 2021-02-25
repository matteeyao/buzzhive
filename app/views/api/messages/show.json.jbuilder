# @messages.each do |message|
#     json.set! message.id do
#         json.partial! 'message', message: message
#     end
# end

# json.partial! 'message', message: @message
# json.partial! 'api/messages/show', message: @message

json.partial! 'message', message: @message
    json.set! :children do 
        json.array! @message.children do |message|
            json.partial! 'show', message: message if message.child_messages.length > 0
        end
    end
