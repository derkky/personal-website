import { Typography, Box, List, ListItem } from "@mui/material"
import spotify1 from "./assets/spotify1.png"
import spotify2 from "./assets/spotify2.png"
import spotify3 from "./assets/spotify3.png"
import spotify4 from "./assets/spotify4.png"
import spotify5 from "./assets/spotify5.png"
import spotify6 from "./assets/spotify6.png"


const SpotifyProject = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em"
            }}
        >
            <Typography
                variant="h4"
            >
                What are the prevalent topics in popular songs today ?
            </Typography>
            <Typography
                variant="h6"
            >
                Summary:
            </Typography>
            <List
                sx={{ listStyleType: "disc", pl: 4, mb: "1.5em" }}
            >
                <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} >
                    3 prevalent topics were identified in the lyrics of popular songs today: "Love", "Street Culture", and "Sex"
                </ListItem>
                <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} >
                    The most prevalent topic was "Love". However, the presence of street culture slang in both the "Love" and "Sex" topics suggests that street culture has an influence on other themes in popular music today.
                </ListItem>
                <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} >
                    The sentiment of "Street Culture" songs was found to be generally positive. This may be explained by "flexing" (showing of one's wealth and status) prevalent in "Street Culture" songs
                </ListItem>
                <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} >
                    The sentiment of "Love" songs was found to be generally negative. This may be because most popular love songs deal with heartbreak and are generally sad. 
                </ListItem>
                <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} >
                    The sentiment of "Sex" songs was found to be generally negative as well. This may be because research shows that many songs incorporate sexual themes to deal with feelings of frustration and rejection. 
                </ListItem>
                <ListItem sx={{ fontSize: "1.2em", display: 'list-item' }} >
                    Limitations of this analysis include the difficulty of determining the optimal number of topics for the LDA model, the limited vocabulary of the BING lexicon for sentiment analysis, and the bag of words approach used.
                </ListItem>
            </List>

            <Typography
                variant="h6"
            >
                1. Introduction
            </Typography>
            <Typography>
                50 songs were scraped from Spotify’s “Global Top 50” playlist with Spotify API. The lyrics of these 50 songs were then scraped with Genius API.Songs with non - English lyrics were filtered out, leaving a corpus of 36 popular English songs. After data cleaning and preprocessing, involving tokenization, lemmatization, and removal of stop words and other non - meaningful tokens, the corpus was cast to a DocumentTermMatrix(DTM). Topic modelling using Latent Dirichlet Allocation(LDA) was then carried out.
            </Typography>

            <Typography>
                LDA is a topic modelling algorithm which assumes documents to be a distribution of topics, and topics to be a distribution of words. It mathematically estimates these 2 distributions, which allows us to determine the top words from a topic, along with which topics a document belongs to (Silge & Robinson, 2021).
            </Typography>

            <Typography>
                The number of topics, K, must be predetermined by the researcher. As I did not know how many topics to expect, I iteratively fitted models with varying numbers of topics and chose the model which I believed had the most interpretable topics. The chosen model had 3 topics and also had the highest mean coherence, a metric which scores topics based on semantic similarity of top keywords(Kapadia, 2020) compared to other models.
            </Typography>

            <Typography
                variant="h6"
            >
                2. Key findings
            </Typography>

            <Typography
                sx={{ fontWeight: 1000 }}
            >
                2.1. Identification of prevalent topics
            </Typography>

            <Box sx={{ display: "flex", gap: "1em", width: "100%", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "center" }}>
                <Box
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <Box
                        component="img"
                        src={spotify1}
                        sx={{ width: "80%" }}
                    />
                    <Typography
                        variant="subtitle2"
                    >
                        Fig 1. Topic 1: Love
                    </Typography>
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <Box
                        component="img"
                        src={spotify2}
                        sx={{ width: "80%" }}
                    />
                    <Typography
                        variant="subtitle2"
                    >
                        Fig 2. Topic 2: Street culture
                    </Typography>
                </Box>
                <Box
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <Box
                        component="img"
                        src={spotify3}
                        sx={{ width: "80%" }}
                    />
                    <Typography
                        variant="subtitle2"
                    >
                        Fig. 3. Topic 3: Sex
                    </Typography>
                </Box>

            </Box>

            <Typography>
                3 topics were returned by the model.

            </Typography>

            <Typography>
                Fig. 1 shows the top keywords from the topic 1. Words which immediately stand out are “love”, “feel” and “baby”. These evoke feelings of love and passion, and as such, “Love” was identified as the theme for this topic.

            </Typography>

            <Typography>
                Love being a prevalent topic in popular music today is to be expected.Love songs are capable of evoking strong and sad emotions, such as nostalgia and heartbreak(Chilton, 2021), which has been found to induce a paradoxically pleasurable response in listeners(Sachs et al., 2015).Love is also a timeless topic, and hence has always been a popular topic in music over the years.Furthermore, love songs are highly relatable, which makes listeners feel emotionally connected to popular culture(Betkowski, 2016).
            </Typography>

            <Typography>
                Fig. 2 shows the top keywords from topic 2. The words which stand out are “gang”, “sexy”, and “bad”. Gangs are closely related with hip - hop and “street culture”, with many modern rappers openly stating their gang affiliations in their music today(Borders, 2019).Street culture is also associated with its own set of slang words. “Bad”, which features prominently in this topic, is an example of street culture slang and is defined by Urban Dictionary as someone who is extremely attractive(Urban Dictionary, n.d.). “Sexy”, also a top keyword in this topic, similarly refers to a sexually attractive person.Hence, given the association of top keywords in this topic with street culture, its theme was identified as “Street culture”.

            </Typography>

            <Typography>
                Street culture is defined as the culture which originated from the attitudes, fashion, music, and language slang of hip - hop artists in the 1970s(PQ, 2019).Today, it has evolved into becoming one of the biggest influences on pop culture today, with a survey by HighSnobiety in 2019 finding that 42 % of Gen - Z identify their style as being “Street” (HighSnobiety & Boston Consulting Group, 2019). Indeed, “streetwear”, a fashion style directly influenced from street culture, has grown to become one of the most prominent styles today(Guzman, 2019).The prevalence of street culture in popular music today may thus possibly be explained by the growing number of young people who subscribe to its beliefs and style.
            </Typography>

            <Typography>
                Fig. 3 shows the top keywords from topic 3. Prevalent words include “woman”, “girl” “scoop”, “baby” and “call”. “Scoop” is a street culture slang word defined by urban dictionary as “picking someone up”, and in the context of the song it appears in, “SCOOP” by Lil Nas X, it ostensibly refers to picking someone up for the purpose of having sex with them(Genius, n.d.).When all keywords are put together, the topic seems to be about calling up woman to have sex with them, or more generally speaking, sex in general.Hence, “Sex” was identified as the theme for this topic.
            </Typography>

            <Typography>
                Sex being a prevalent topic in popular music today is also to be expected, as sex has been a popular theme in music since as early as the 20th century.Moreover, studies show that the sexual content in songs has become increasingly explicit over time.Uses and gratifications has been suggested as a theoretical framework to possibly explain why listeners frequently listen to sex - themed music.Specifically, listening to sex - themed music is seen as a source of entertainment, a part of identity formation in terms of gender - roles in sex, as well as a coping mechanism to deal with listeners’ own personal frustrations and disappointments relating to sex(Arnett et al., 2002).
            </Typography>

            <Typography>
                The 3 identified topics are seemingly related to one another.The link between “Love” and “Sex” is obvious.However, there is a more subtle link between “Street culture” and “Sex” through the keyword “scoop”. As mentioned above, “scoop” is a street culture slang word, and hence is also related to the topic of “Street culture” despite belonging to the “Sex” theme.This suggests that street culture has an underlying influence on other themes in popular music today.Songs falling under the theme of “sex” and “love” may thus also heavily feature “street culture” slang and references.
            </Typography>

            <Typography
                sx={{ fontWeight: 1000 }}
            >
                2.2. Relative prevalence of identified topics
            </Typography>

            <Box
                sx={{ textAlign: "center" }}
            >
                <Box
                    component="img"
                    src={spotify4}
                    sx={{ width: "100%" }}
                />
                <Typography
                    variant="subtitle2"
                >
                    Fig. 4. Mean proportion of topics in songs
                </Typography>
            </Box>

            <Typography>
                LDA assumes that songs can be made up of multiple topics.Fig. 4 shows the mean proportion of each topic in popular songs today.As can be observed, “Love” is the most popular topic, followed by “Sex” and finally “Street Culture”. An ANOVA test was also performed to determine if the difference in mean proportion between different topics is statistically significant, and a p - value of 0.00588 was obtained, indicating statistical significance.
            </Typography>

            <Typography>
                This suggests that most popular songs today are mainly about love.However, as mentioned above in section 2.1, street culture likely has an underlying influence on other topics.Hence, “Street culture” may be more influential than its relatively low mean proportion in Fig. 4 suggests.
            </Typography>

            <Box
                sx={{ textAlign: "center" }}
            >
                <Typography
                    sx={{ fontWeight: 1000 }}
                >
                    2.3. Distribution of topics in songs
                </Typography>
            </Box>

            <Box
                sx={{ textAlign: "center" }}
            >
                <Box
                    component="img"
                    src={spotify5}
                    sx={{ width: "100%" }}
                />
                <Typography
                    variant="subtitle2"
                >
                    Fig. 5. Distribution of topics in each song, with songs ordered by rank
                </Typography>
            </Box>

            <Typography>
                As mentioned above, LDA assumes that songs can be made up of multiple topics.Fig. 5 shows the distribution of the three identified topics in each song.
            </Typography>

            <Typography>
                As can be observed, most popular songs are mainly made up of only one topic, with only a few songs having significant proportions of multiple topics.This suggests that listeners may prefer listening to songs which focus mainly on a single topic.
            </Typography>

            <Typography>
                There also seems to be no discernable pattern between song topics and rank, with both the top 10 and bottom 10 songs containing songs of all 3 different topics.Hence, all 3 topics appear to be similarly distributed across song rank.This suggests that distribution of topics in a song does not significantly impact its rank.
            </Typography>

            <Typography
                sx={{ fontWeight: 1000 }}
            >
                2.4. Sentiments of topics
            </Typography>

            <Box
                sx={{ textAlign: "center" }}
            >
                <Box
                    component="img"
                    src={spotify6}
                    sx={{ width: "100%" }}
                />
                <Typography
                    variant="subtitle2"
                >
                    Fig. 6. Overall sentiments of topics
                </Typography>
            </Box>

            <Typography>
                Fig. 6 shows the overall sentiment of each identified topic, based on the Bing lexicon which classifies words as being “positive” or “negative” (Silge & Robinson, 2021).As can be seen, the topics “Love” and “Sex” have overall negative sentiments.The overall negativity of “Love” aligns with the aforementioned phenomenon of love songs mainly being sad, as listeners prefer to listen to sad music with negative sentiment as a way of regulating their mood and reflecting on past relatable experiences(Sachs et al., 2015).The overall negativity of “Sex” may also be explained by the previously mentioned use of sexual themes in music as a coping mechanism to deal with personal experiences of frustration and rejection regarding sex(Arnett et al., 2002).
            </Typography>

            <Typography>
                On the other hand, the overall positivity of “Street Culture” could possibly be attributed to the prevalence of “flexing”, or showing off one’s status and wealth, in “Street Culture” songs(Gee, 2021).This would cause the overall sentiment of lyrics to be positive as artists sing about positive things, such as their vast amounts of wealth and luxurious lifestyle.
            </Typography>

            <Typography
                variant="h6"
            >
                3. Conclusion
            </Typography>

            <Typography>
                In conclusion, 3 main topics were identified in popular songs today, namely “Love”, “Street Culture”, and “Sex”.However, it is likely that “Street Culture” has an underlying influence on the other 2 topics, with street culture slang and references being found in “Love” and “Sex”. “Love” was found to be the most prevalent topic, though “Street culture” is likely to be more influential than findings suggest.Most popular songs were also found to be mainly composed of a single topic as opposed to a mix of different topics, suggesting that songs which focused on a single topic tend to do better. “Love” and “sex” songs were found to have overall negative sentiments, which may be because they tended to deal with frustration, disappointment, and heartbreak.On the other hand, “Street culture” songs were found to have an overall positive sentiment, which could possibly be attributed to the prevalence of artists “flexing”, or singing about positive things such as wealth and luxury, in their music.
            </Typography>

            <Typography
                variant="h6"
            >
                4. Limitations
            </Typography>

            <Typography
                sx={{ fontWeight: 1000 }}
            >
                4.1. Difficult to determine number of topics, K, for Latent Dirichlet Allocation
            </Typography>
            <Typography>
                LDA topic modelling requires number of topics, K, to be known beforehand.While K was determined through trial and error in conjunction with mean coherence score, this method is still flawed as coherence alone is not an all - encompassing evaluator for LDA models.Moreover, the method employed involved me personally determining whether topics are interpretable, which is highly subjective.Hence, the K which was determined may not be fully accurate.
            </Typography>
            <Typography
                sx={{ fontWeight: 1000 }}
            >
                4.2. Bing Sentiment analysis lexicon is limited
            </Typography>
            <Typography>
                The Bing lexicon does not cover all words in the English language.Hence, the sentiments reflected in the analysis may not be fully representative.Moreover, the lexicons do not contain sentiment mappings for slang terms, such as “scoop”, which further limits its representativeness.
            </Typography>

            <Typography
                sx={{ fontWeight: 1000 }}
            >
                4.3. Bag of words
            </Typography>
            <Typography>
                Textual analysis also tokenizes words, and hence it does not take into account sentence structure.Since structuring sentences differently can alter their meaning, tokenizing comments leads to a loss of information, and hence it may not lead to fully accurate and representative results.
            </Typography>
            <Typography
                variant="h6"
            >
                5. References
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Arnett, J.J. (2002).The Sounds of Sex: Sex in Teens' Music and Music Videos. In J. D. Brown, J. R. Steele, &amp; K. Walsh-Childers (Eds.), Sexual Teens, Sexual Media: Investigating Media’s Influence on Adolescent Sexuality (pp. 253–264). essay, Mahwah.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Betkowski, B. (2016, February 10).Why we love love songs.University of Alberta | Folio.Retrieved November 19, 2021, from https://www.ualberta.ca/folio/2016/02/why-we-love-love-songs.html.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Borders, A. (2019, February 21).Gang culture in hip - hop: A quick look into its relevance in 2019. Daily Emerald.Retrieved November 19, 2021, from https://www.dailyemerald.com/arts-culture/gang-culture-in-hip-hop-a-quick-look-into-its-relevance-in-2019/article_cd95cc90-3597-11e9-81ca-27df32d970a4.html.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Chilton, M. (2021, February 15).Deconstructing The love song: How and why love songs work.uDiscover Music.Retrieved November 19, 2021, from https://www.udiscovermusic.com/in-depth-features/deconstructing-the-love-song-how-they-work/.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Gee, A. (2021, August 5).When flexing goes wrong.Complex.Retrieved November 19, 2021, from https://www.complex.com/music/when-flexing-goes-wrong-opinion.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Genius. (n.d.).Lil & nbsp;Nas X(ft.& nbsp; doja & nbsp;cat) – scoop.Genius.Retrieved November 19, 2021, from https://genius.com/Lil-nas-x-scoop-lyrics.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Guzman, J. (2019, March 26).The history of Hip Hop Fashion: How Street Culture became fashion's biggest influence. afterglow. Retrieved November 19, 2021, from https://www.afterglowatx.com/blog/2019/3/26/the-history-of-hip-hop-fashion-how-street-culture-became-fashions-biggest-influence.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                HighSnobiety, & amp; Boston Consulting Group. (2019).Culture Culture Culture:  Quantifying What Matters Most to the New Fashion & amp; Luxury Consumer.Berlin; Titel Media GmbH.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Kapadia, S. (2020, December 29).Evaluate topic models: Latent Dirichlet allocation(LDA).Medium.Retrieved November 19, 2021, from https://towardsdatascience.com/evaluate-topic-model-in-python-latent-dirichlet-allocation-lda-7d57484bb5d0.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                PQ, R. (2019, November 26).Hip hop history: From the streets to the mainstream: Icon collective.Icon Collective College of Music.Retrieved November 19, 2021, from https://iconcollective.edu/hip-hop-history/).
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Sachs, M.E., Damasio, A., & amp; Habibi, A. (2015).The pleasures of SAD music: A systematic review.Frontiers in Human Neuroscience, 9. https://doi.org/10.3389/fnhum.2015.00404
            </Typography>

            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Silge, J., & amp; Robinson, D. (2021, September 2). 2 sentiment analysis with Tidy Data: Text mining with R. 2 Sentiment analysis with tidy data | Text Mining with R.Retrieved November 19, 2021, from https://www.tidytextmining.com/sentiment.html.
            </Typography>
            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Silge, J., & amp; Robinson, D. (2021, September 2).Text Mining with R: A Tidy Approach. 6 Topic modeling | Text Mining with R.Retrieved November 19, 2021, from https://www.tidytextmining.com/topicmodeling.html.
            </Typography>


            <Typography
                sx={{ textIndent: "-2em", pl: "2em" }}
            >
                Urban Dictionary. (n.d.).Bad.Urban Dictionary.Retrieved November 19, 2021, from https://www.urbandictionary.com/define.php?term=bad.
            </Typography>

        </Box>

    )
}

export default SpotifyProject