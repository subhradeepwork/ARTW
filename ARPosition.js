// ARPosition.js
var unityInstance;

function setUnityInstance(instance) {
    unityInstance = instance;
}

window.addEventListener("message", function (event) {
    if (event.data.type === "SetARPosition") {
        setARPosition(event.data.position, event.data.rotation);
    }
});

function setARPosition(position, rotation) {
    if (unityInstance != null) {
        unityInstance.SendMessage('MarkerManager', 'OnSetARPosition', JSON.stringify({ position: position, rotation: rotation }));
    }
}
