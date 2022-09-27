use yew::prelude::*;

#[function_component(Producer)]
fn producer() -> Html {
    html!(
        <div class={"bg-gradient-to-r from-green-400 to-blue-500 p-10 font-mono"}>
            <h3 class={"bg-white text-center p-5 rounded-lg text-blue shadow-lg "}>{"Producer"}</h3>
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
