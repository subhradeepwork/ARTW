// ARPosition.js
var unityInstance;

function setUnityInstance(instance) {
    unityInstance = instance;
    console.log("Unity instance set:", unityInstance);
}

window.addEventListener("message", function (event) {
    console.log("Received message:", event.data);
    if (event.data.type === "SetARPosition") {
        setARPosition(event.data.position, event.data.rotation);
    }
});

function setARPosition(position, rotation) {
    console.log("Setting AR Position:", position, rotation);
    if (unityInstance != null) {
        unityInstance.SendMessage('MarkerManager', 'OnSetARPosition', JSON.stringify({ position: position, rotation: rotation }));
    } else {
        console.log("Unity instance is null.");
    }
}
