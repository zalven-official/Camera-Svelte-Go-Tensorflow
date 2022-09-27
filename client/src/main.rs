use js_sys::Boolean;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{window, HtmlVideoElement, MediaStream, MediaStreamConstraints};
use yew::prelude::*;

#[function_component(Producer)]
fn producer() -> Html {
    wasm_bindgen_futures::spawn_local(async move {
        let navigator = window().unwrap().navigator();
        let media_devices = navigator.media_devices().unwrap();
        let video_element = window()
            .unwrap()
            .document()
            .unwrap()
            .get_element_by_id("webcam")
            .unwrap()
            .unchecked_into::<HtmlVideoElement>();
        let mut constraints = MediaStreamConstraints::new();
        constraints.video(&Boolean::from(true));
        let devices_query = media_devices
            .get_user_media_with_constraints(&constraints)
            .unwrap();

        let device = JsFuture::from(devices_query)
            .await
            .unwrap()
            .unchecked_into::<MediaStream>();

        video_element.set_src_object(Some(&device));
    });

    html!(
        <div class={"bg-gradient-to-r from-green-400 to-blue-500 p-10 font-mono"}>
            <h3 class={"bg-white text-center p-5 rounded-lg text-blue shadow-lg "}>{"Producer"}</h3>
            <video autoplay=true id="webcam"></video>
        </div>
    )
}
#[function_component(Consumer)]
fn consumer() -> Html {
    html!(
        <div class={"bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 first-letter:text-2xl p-10 font-mono"}>
            <h3 class={"bg-white text-center p-5 rounded-lg text-blue shadow-lg "}>
                {"Consumer"}
            </h3>
        </div>
    )
}

#[function_component(App)]
fn app() -> Html {
    html!(
        <div class={"grid grid-cols-1 md:grid-cols-2"}>
           <Producer/>
           <Consumer/>
        </div>
    )
}

fn main() {
    yew::start_app::<App>();
}
