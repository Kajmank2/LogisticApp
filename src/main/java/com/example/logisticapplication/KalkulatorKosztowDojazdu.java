package com.example.logisticapplication;

import android.os.Bundle;
import android.webkit.WebView;

import androidx.appcompat.app.AppCompatActivity;

public class KalkulatorKosztowDojazdu  extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_kalkulatorkosztowdojazdu);
        WebView webVIew = (WebView) findViewById(R.id.webwiebkalukaltorkosztowdojazdu);
        webVIew.getSettings().setJavaScriptEnabled(true);
        webVIew.getSettings().setDomStorageEnabled(true);
        webVIew.loadUrl("file:///android_asset/KalkulatorKosztowDojazdu.html");

    }
}