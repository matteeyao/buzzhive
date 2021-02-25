# json.(message,:id, :body)
# json.answers question.answers do |answer|
#   json.(answer, :id, :text)
#   json.partial!(:question, question: answer.next_question) if answer.next_question
# end


# json.partial! 'message', message: @message
#     json.set! :children do 
#         json.array! @message.child_messages do |message|
#             json.partial! 'show', message: message if message.child_messages.length > 0
#         end
#     end
# end

json.partial! 'message', message: message 
    json.set! :children do
        if message.children.length > 0
            json.array! message.children do |message|
                json.partial! 'show', message: message
            end
        else
            json.array!
        end
    end

# if message.child_messages.length > 0

