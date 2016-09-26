# Create a custom renderer that extend Redcarpet to customize its behavior.
require 'jekyll'
require 'redcarpet'

class RedcarpetExtender < Redcarpet::Render::HTML
  # Extend the checkbox
  def list_item(text, list_type)
    if text.start_with?("[x]", "[X]")
      text[0..2] = %(<input type="checkbox" checked="checked">)
    elsif text.start_with?("[ ]")
      text[0..2] = %(<input type="checkbox">)
    end

    %(<li>#{text}</li>)
  end
end

class Jekyll::Converters::Markdown::RedcarpetExt
  def initialize(config)
    @site_config = config
  end

  def extensions
    Hash[ *@site_config['redcarpet']['extensions'].map {|e| [e.to_sym, true]}.flatten ]
  end

  def markdown
    @markdown ||= Redcarpet::Markdown.new(RedcarpetExtender, extensions)
  end

  def convert(content)
    return super unless @site_config['markdown'] == 'RedcarpetExt'
    markdown.render(content)
  end
end