package com.us.cooking.service;

import com.us.cooking.dto.FilterQuestionnaireDTO;
import com.us.cooking.dto.RecipeDTO;
import com.us.cooking.dto.ShortRecipeDTO;
import com.us.cooking.mapper.RecipeMapper;
import com.us.cooking.model.RecipeEntity;
import com.us.cooking.repository.DictionaryRepository;
import com.us.cooking.repository.IngredientRepository;
import com.us.cooking.repository.RecipeIngredientsRepository;
import com.us.cooking.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final DictionaryRepository dictionaryRepository;
    private final RecipeIngredientsRepository recipeIngredientsRepository;
    private final IngredientRepository ingredientRepository;

    public List<ShortRecipeDTO> getShortRecipes(List<FilterQuestionnaireDTO> filter) {
        return null;
    }

//    public void saveRecipe() throws IOException {
//        RecipeEntity recipeEntity = new RecipeEntity();
//        recipeEntity.setCalories("500");
//        recipeEntity.setCreatedAt(LocalDate.now());
//        recipeEntity.setModifiedAt(LocalDate.now());
//        recipeEntity.setName("Chicken with rice");
//        recipeEntity.setDescription("Nothing beats this one-pot creamy chicken and rice recipe when it comes to convenience or comfort. If you could have a no-hassle garlicky, delicious chicken and rice dish on the table in less than 30 minutes with only one pot to clean, why wouldn’t you?");
//
//        BufferedImage bImage = ImageIO.read(new File("D:\\studia\\chicken.jpg"));
//        ByteArrayOutputStream bos = new ByteArrayOutputStream();
//        ImageIO.write(bImage, "jpg", bos );
//        byte[] data = bos.toByteArray();
//        recipeEntity.setImage(data);
//
//        recipeEntity.setRate("5");
//        recipeEntity.setServings("6");
//        recipeEntity.setIngredientsAmount("1");
//
//        recipeEntity.setCuisineType(7);
//        recipeEntity.setMealType(2);
//        recipeEntity.setPrepareTime(11);
//        recipeEntity.setDifficultyLevel(14);
//
//        List<RecipeIngredientsEntity> list = new ArrayList<>();
//        RecipeIngredientsEntity recipeIngredientsEntity = new RecipeIngredientsEntity();
//        recipeIngredientsEntity.setRecipeEntity(recipeEntity);
//        recipeIngredientsEntity.setIngredientEntity(ingredientRepository.findById(4));
//
//        recipeIngredientsRepository.save(recipeIngredientsEntity);
//
//        recipeRepository.save(recipeEntity);
//    }

    public List<ShortRecipeDTO> getShortRecipes(FilterQuestionnaireDTO filter) {
        return null;
    }

    @Transactional
    public RecipeDTO getRecipe(Integer id) {
        RecipeEntity recipeEntity = recipeRepository.findById(id).orElseThrow();
        RecipeDTO recipeDTO = RecipeMapper.mapToRecipeDTO(recipeEntity);
        recipeDTO.setCuisineTypeValue(
                dictionaryRepository.findById(recipeEntity.getCuisineType())
                .orElseThrow()
                .getValue());
        recipeDTO.setCuisineTypeValue(
                dictionaryRepository.findById(recipeEntity.getCuisineType())
                .orElseThrow()
                .getValue());
        recipeDTO.setMealTypeValue(
                dictionaryRepository.findById(recipeEntity.getMealType())
                .orElseThrow()
                .getValue());
        recipeDTO.setPrepareTimeValue(
                dictionaryRepository.findById(recipeEntity.getPrepareTime())
                .orElseThrow()
                .getValue());
        recipeDTO.setDifficultyLevelValue(
                dictionaryRepository.findById(recipeEntity.getDifficultyLevel())
                .orElseThrow()
                .getValue());

        return recipeDTO;
    }
}
