TextualMultilabel = Struct.new(:title, :options) do
  def locals
    {:title => title, :values => options[:values], :rows => options[:values], :labels => options[:labels], :component => 'SimpleTable'}
  end
end
