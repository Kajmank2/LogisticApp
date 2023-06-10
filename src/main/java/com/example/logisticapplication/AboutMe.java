package com.example.logisticapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class AboutMe extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about_me);
        WebView webVIew = (WebView) findViewById(R.id.webwiev);
        webVIew.getSettings().setJavaScriptEnabled(true);
        webVIew.loadUrl("file:///android_asset/index.html");

    }
}