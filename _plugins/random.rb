module RandomElement
  def random(input)
    index = rand(0...input.length)
    input[index]
  end
end

Liquid::Template.register_filter(RandomElement)