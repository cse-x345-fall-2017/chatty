defmodule ChattyWeb.UserSocket do
  use Phoenix.Socket

  ## Channels
  channel "chatty:*", ChattyWeb.ChatChannel

  ## Transports
  transport :websocket, Phoenix.Transports.WebSocket

  def connect(_params, socket) do
    {:ok, socket}
  end

  def id(_socket), do: nil
end
