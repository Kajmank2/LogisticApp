package com.example.logisticapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class KalkulatorSpalania extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_kalkulatorspalania);
        WebView webVIew = (WebView) findViewById(R.id.webwievkalkulatorspalania);
        webVIew.getSettings().setJavaScriptEnabled(true);
        webVIew.getSettings().setDomStorageEnabled(true);
        webVIew.loadUrl("file:///android_asset/KalkulatorSpalania.html");

    }
}