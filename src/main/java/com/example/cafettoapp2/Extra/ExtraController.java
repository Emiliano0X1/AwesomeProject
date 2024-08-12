package com.example.cafettoapp2.Extra;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/extra")
public class ExtraController {

    private final ExtraService extraService;

    public ExtraController(ExtraService extraService) {
        this.extraService = extraService;
    }

    @GetMapping
    public List<Extra> getExtra() {
        return extraService.getExtras();
    }

    @PostMapping
    public void postExtra(@RequestBody Extra extra) {
        extraService.addNewExtra(extra);
    }

    @DeleteMapping(path = "{extra_id}")
    public void deleteExtra(@PathVariable Integer extra_id) {
        extraService.deleteExtra(extra_id);
    }

    @PutMapping(path = "{extra_id}")
    public void updateExtra(@PathVariable("extra_id") Integer extra_id,@RequestParam (required = false) String name,@RequestParam (required = false) int price,@RequestParam (required = false) boolean selected) {
        extraService.updateExtra(extra_id, name, price, selected);
    }
}
