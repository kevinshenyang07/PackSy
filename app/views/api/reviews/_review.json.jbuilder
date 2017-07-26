json.extract! review, :id, :body, :rating, :updated_at
json.user do
  json.firstname review.user.firstname
  json.lastname review.user.lastname
end
