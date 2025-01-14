import React, { Component, Suspense } from "react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <img
          src="/girlie.gif"
          alt="Splash Animation"
          style={{ width: "100%", height: "auto" }}
        />
      </Suspense>
    );
  }
}

