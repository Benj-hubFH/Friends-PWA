package com.example.friends_dasfreundebuch;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageButton;

import androidx.annotation.Nullable;
import java.util.ArrayList;

public class OwnProfile extends ListActivity {

    ArrayList listItems = new ArrayList<>();

    ArrayAdapter adapter;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.own_layout);
        adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, listItems);
        ImageButton editBtn = findViewById(R.id.edit_button);
        ImageButton backBtn = findViewById(R.id.back_button);
        ImageButton closeBtn = findViewById(R.id.close_button);
        listItems.contains(Object o);

        editBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setContentView(R.layout.own_layout_edit_view);
            }
        });

        backBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(OwnProfile.this, MainActivity.class));
            }
        });

        closeBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                setContentView(R.layout.own_layout);
            }
        });
    }


}
