

defmodule ChattyWeb.ChatChannel do

  use Phoenix.Channel

  def join("chatty:common", _message, socket) do
    IO.puts "Joined!!!!!"
    { :ok, socket }
  end

  def handle_in("keypress", msg, socket) do
    broadcast! socket, "echo", %{ key: msg["key"] }
    { :reply, { :ok, msg}, socket }
  end

end
