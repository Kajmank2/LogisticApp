package com.example.logisticapplication;

import android.os.Bundle;
import android.webkit.WebView;

import androidx.appcompat.app.AppCompatActivity;

public class Pjl extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pjl);
        WebView webVIew = (WebView) findViewById(R.id.webwievpjl);
        webVIew.getSettings().setJavaScriptEnabled(true);
        webVIew.getSettings().setDomStorageEnabled(true);
        webVIew.loadUrl("file:///android_asset/Pjl.html");

    }
}
