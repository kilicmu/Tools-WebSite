import React from "react";
import loadable, { DefaultComponent } from "@loadable/component";
import { Loading } from "../../views/Loading";

export function loadableComponentFactory(
  loadFn: (props: unknown) => Promise<DefaultComponent<unknown>>
) {
  return () => {
    const LoadableComponent = loadable(loadFn, {
      fallback: <Loading />,
    });
    return <LoadableComponent />;
  };
}
