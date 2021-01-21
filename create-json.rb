require 'cgi'
require 'json'

# TODO This is a quick and dirty script, but it'll take every line in
# andrewturls.txt and chuck out a valid json dump.
# Usage: ruby ./create-json.rb > ./directory.json

puts "["

@results = Array.new

File.readlines('andrewturls.txt').each do |url|
  result = Hash.new
  result["andrewturl"] = url
  splitstring = url.split('#')
  querystring = splitstring[1]
  substring = querystring.split(';')
  result["name"] = CGI.unescape(substring[0])
  result["author"] = CGI.unescape(substring[1])
  @title = substring[0]
  @author = substring[1]
  remainder = substring[2].split(',')
  @tilewidth = remainder[0]
  @tileheight = remainder[1]
  @rows = remainder[2]
  @columns = remainder[3]
  result["size"] = Integer(@rows) * Integer(@columns)
  4.times do
    remainder.delete_at(0)
  end
  @clues = remainder.join('-')
  cjurl = "https://countjocular.github.io/junimoji-worksheet/?"
  cjurl += "r=#{@rows}&c=#{@columns}"
  cjurl += "&title=#{@title}"
  cjurl += "&author=#{@author}"
  cjurl += "&clues=#{@clues}"
  result["url"] = cjurl

  @results << result.to_json

end

puts @results.join(',')
puts "]"
