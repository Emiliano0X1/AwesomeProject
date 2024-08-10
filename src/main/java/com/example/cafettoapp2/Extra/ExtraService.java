package com.example.cafettoapp2.Extra;

import org.springframework.stereotype.Service;

@Service
public class ExtraService {

    private final ExtraRepository extraRepository;

    public ExtraService(ExtraRepository extraRepository) {
        this.extraRepository = extraRepository;
    }
}
