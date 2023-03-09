package com.example.application.views.helloworld;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;

@Tag("cesium-viewer")
@JsModule("./cesium-viewer.ts")
@NpmPackage(value = "cesium", version = "1.84.0")
public class CesiumViewer extends Component {}
