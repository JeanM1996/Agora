let handlfail = function (err) {
    console.log(err);
}

function addVideo(streamId) {
    console.log("Adding Video");
    let remoteContainer = document.getElementById("remoteStream");
    let streamDiv = document.createElement("div");
    streamDiv.id = streamId;
    streamDiv.style.height = "250px";
    remoteContainer.appendChild(streamDiv);
}

document.getElementById("join").onclick = function () {
    let channelName = document.getElementById("channelName").value;
    let Username = document.getElementById("username").value;
    let appId = "64b2c5f0190b4996af57fa3c2fbed72d";

    let client = AgoraRTC.createClient({
        mode: "rtc",
        codec: "h264"
    })

    client.init(appId, () => console.log("AgoraRTC Client Connected"), handlfail)

    client.join(null, channelName, Username, () => {
        var localStream = AgoraRTC.createStream({
            video: true,
            audio: true
        })
        localStream.init(function () {
            localStream.play("SelfStream");
            console.log(`App ID: ${appId}\nChannel Name: ${channelName}`)
            client.publish(localStream);
        })
    })

    client.on('stream-added', function (evt) {
        console.log("Added Stream");
        client.subscribe(evt.stream, handlefail);
    })

    client.on('stream-subscribed', function (evt) {
        console.log("Subscribed Stream");
        let stream = evt.stream;
        addVideoStream(stream.getId());
        stream.play(stream.getId());
    })

}